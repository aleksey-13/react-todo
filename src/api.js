import { db, auth } from './firebase'

export function loginUser(login, password) {
    return auth
        .signInWithEmailAndPassword(login, password)
        .then((msg) => console.log(msg))
        .catch((error) => {
            console.log(error)
        })
}

export function registerUser(email, password) {
    return auth
        .createUserWithEmailAndPassword(email, password)
        .then((msg) => console.log(msg))
        .catch((error) => {
            console.log(error)
        })
}

export function getLists() {
    return db
        .collection('lists')
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

            return data
        })
        .catch((error) => {
            console.log('Error getting documents: ', error)
        })
}

export function getTodos() {
    return db
        .collection('todos')
        .where('listId', '==', '')
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            console.log('data', data)
            return data
        })
        .catch((error) => {
            console.log('Error getting documents: ', error)
        })
}

export function getListTodos(listId) {
    return db
        .collection('todos')
        .where('listId', '==', listId)
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

            return data
        })
        .catch((error) => {
            console.log('Error getting documents: ', error)
        })
}

export function createTodo(data) {
    return db
        .collection('todos')
        .add({
            ...data,
            completed: false,
        })
        .then((docRef) => docRef.get())
        .then((doc) => ({ id: doc.id, ...doc.data() }))
}

export function removeTodo(todoId) {
    return db
        .collection('todos')
        .doc(todoId)
        .delete()
        .then(() => todoId)
        .catch((error) => console.error('Error removing document: ', error))
}

export function updateTodo(todoId, data) {
    return db
        .collection('todos')
        .doc(todoId)
        .update(data)
        .then(() => ({ id: todoId, ...data }))
        .catch((error) => console.error('Error removing document: ', error))
}

export function onAuth(handleAuth) {
    auth.onAuthStateChanged(handleAuth)
}
