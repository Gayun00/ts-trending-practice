import firebaseApp from './firebaseConfig';
import { getDatabase, set, ref } from 'firebase/database';

const database = getDatabase(firebaseApp);
export function writeUserData(userId: string, name: string) {
	set(ref(database, 'users/' + userId), {
		username: name,
	});
}
