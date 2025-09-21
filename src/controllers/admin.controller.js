const admin = require('../config/firebase-config');
const db = admin.firestore();

const getAllUsers = async (req, res) => {
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

const getAllAdmins = async (req, res) => {
    try {
        const adminsSnapshot = await db.collection('admins').get();
        const admins = adminsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching admins', error });
    }
};

const getAllBloodRequests = async (req, res) => {
    try {
        const requestsSnapshot = await db.collection('bloodRequests').get();
        const requests = requestsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blood requests', error });
    }
};

const updateBloodRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        await db.collection('bloodRequests').doc(id).update(updatedData);
        res.status(200).json({ message: `Successfully updated blood request ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error updating blood request', error });
    }
};

const approveManyUsers = async (req, res) => {
    try {
        const { donorIds } = req.body;

        if (!donorIds || !Array.isArray(donorIds) || donorIds.length === 0) {
            return res.status(400).json({ message: 'Invalid or empty donorIds array provided.' });
        }

        const batch = db.batch();

        donorIds.forEach(id => {
            const docRef = db.collection('users').doc(id);
            batch.update(docRef, { isVerified: true });
        });

        await batch.commit();

        res.status(200).json({ message: `Successfully approved ${donorIds.length} users.` });

    } catch (error) {
        res.status(500).json({ message: 'Error approving users in bulk', error });
    }
};

module.exports = {
    getAllUsers,
    getAllAdmins,
    getAllBloodRequests,
    updateBloodRequest,
    approveManyUsers, // Export the new function
};
