const admin = require('../config/firebase-config');
const db = admin.firestore();

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const getDashboardStats = async (req, res) => {
    console.log('Dashboard: getDashboardStats called');
    try {
        const pendingDonorsSnapshot = await db.collection('users').where('isVerified', '==', false).get();
        const verifiedDonorsSnapshot = await db.collection('users').where('isVerified', '==', true).get();
        const activeRequestsSnapshot = await db.collection('bloodRequests').where('status', '==', 'pending').get();
        const reportsSnapshot = await db.collection('reports').get(); // Assuming a 'reports' collection

        const stats = {
            pendingDonors: pendingDonorsSnapshot.size,
            verifiedDonors: verifiedDonorsSnapshot.size,
            activeRequests: activeRequestsSnapshot.size,
            reports: reportsSnapshot.size,
        };
        console.log('Dashboard: Fetched stats:', stats);
        res.status(200).json(stats);
    } catch (error) {
        console.error('Dashboard: Error in getDashboardStats', error);
        res.status(500).json({ message: 'Error fetching dashboard stats', error });
    }
};

const getDonorBloodStats = async (req, res) => {
    console.log('Dashboard: getDonorBloodStats called');
    try {
        const donorsSnapshot = await db.collection('users').get();
        const bloodStats = Object.fromEntries(BLOOD_TYPES.map(type => [type, 0]));

        donorsSnapshot.docs.forEach(doc => {
            const donor = doc.data();
            if (donor.bloodGroup && BLOOD_TYPES.includes(donor.bloodGroup)) {
                bloodStats[donor.bloodGroup]++;
            }
        });
        console.log('Dashboard: Fetched donor blood stats:', bloodStats);
        res.status(200).json(bloodStats);
    } catch (error) {
        console.error('Dashboard: Error in getDonorBloodStats', error);
        res.status(500).json({ message: 'Error fetching donor blood stats', error });
    }
};

const getRequestBloodStats = async (req, res) => {
    console.log('Dashboard: getRequestBloodStats called');
    try {
        const requestsSnapshot = await db.collection('bloodRequests').get();
        const bloodStats = Object.fromEntries(BLOOD_TYPES.map(type => [type, 0]));

        requestsSnapshot.docs.forEach(doc => {
            const request = doc.data();
            if (request.bloodGroup && BLOOD_TYPES.includes(request.bloodGroup)) {
                bloodStats[request.bloodGroup]++;
            }
        });
        console.log('Dashboard: Fetched request blood stats:', bloodStats);
        res.status(200).json(bloodStats);
    } catch (error) {
        console.error('Dashboard: Error in getRequestBloodStats', error);
        res.status(500).json({ message: 'Error fetching request blood stats', error });
    }
};

const getDonorLocations = async (req, res) => {
    console.log('Dashboard: getDonorLocations called');
    try {
        const donorsSnapshot = await db.collection('users').get();
        const donorLocations = [];

        donorsSnapshot.docs.forEach(doc => {
            const donor = doc.data();
            if (donor.latitude && donor.longitude) {
                donorLocations.push({
                    id: doc.id,
                    name: donor.name || 'Donor',
                    latitude: donor.latitude,
                    longitude: donor.longitude,
                });
            }
        });
        console.log(`Dashboard: Fetched ${donorLocations.length} donor locations.`);
        res.status(200).json(donorLocations);
    } catch (error) {
        console.error('Dashboard: Error in getDonorLocations', error);
        res.status(500).json({ message: 'Error fetching donor locations', error });
    }
};

module.exports = {
    getDashboardStats,
    getDonorBloodStats,
    getRequestBloodStats,
    getDonorLocations,
};