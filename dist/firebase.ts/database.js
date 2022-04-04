import firebaseApp from './firebaseConfig';
import { getDatabase, set, ref } from 'firebase/database';
const database = getDatabase(firebaseApp);
export function writeUserData(userId, name) {
    set(ref(database, 'users/' + userId), {
        username: name,
    });
}
