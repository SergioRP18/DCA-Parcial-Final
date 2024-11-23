let db: any;

const getFirestoreInstance = async () => {
    if(!db){
        const {getFirestore} = await import ('firebase/firestore')
        const {initializeApp} = await import ('firebase/app')

        const firebaseConfig = {
            apiKey: "AIzaSyCrrWFbFecwwJDPeFIJTLw1IjoOddyrbbI",
            authDomain: "parcial-final-7e00e.firebaseapp.com",
            projectId: "parcial-final-7e00e",
            storageBucket: "parcial-final-7e00e.firebasestorage.app",
            messagingSenderId: "891222114264",
            appId: "1:891222114264:web:c14e256c00508e67cdfcad"
        };

        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
    return db;
};

export const addProducts = async (song: any) => {
    try {
        const db = await getFirestoreInstance();
        const { collection, addDoc } = await import('firebase/firestore');
		const docRef = await addDoc(collection(db!, 'products'), song);

		console.log('Document written with ID:', docRef.id);
	} catch (error) {
		console.error(error);
	}
};

export const getProducts = async () => {
    const db = await getFirestoreInstance();
    const { collection, getDocs } = await import('firebase/firestore');
	const querySnapshot = await getDocs(collection(db!, 'products'));
	const transformed: any[] = [];

	querySnapshot.forEach((doc: any) => {
		const data: any = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});

	return transformed;
};

export default {
	addProducts,
	getProducts,
};