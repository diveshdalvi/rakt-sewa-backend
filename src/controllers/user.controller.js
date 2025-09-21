const admin = require('../config/firebase-config');
const db = admin.firestore();

const createUser = async (req, res) => {
    try {
        const { id, ...data } = req.body;
        await db.collection('users').doc(id).set(data);
        res.status(201).json({ message: `Successfully created user ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const userDoc = await db.collection('users').doc(id).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ id: userDoc.id, ...userDoc.data() });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        await db.collection('users').doc(id).update(updatedData);
        res.status(200).json({ message: `Successfully updated user ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

const createBloodRequest = async (req, res) => {
    try {
        const requestData = { ...req.body, status: 'pending' }; // Add pending status
        const docRef = await db.collection('bloodRequests').add(requestData);
        res.status(201).json({ message: 'Successfully created blood request', id: docRef.id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blood request', error });
    }
};

const getUserBloodRequests = async (req, res) => {
    try {
        const { userId } = req.params;
        const requestsSnapshot = await db.collection('bloodRequests').where('userId', '==', userId).get();
        const requests = requestsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user blood requests', error });
    }
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    createBloodRequest,
    getUserBloodRequests,
};
