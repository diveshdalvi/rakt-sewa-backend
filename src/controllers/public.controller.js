const admin = require("../config/firebase-config");
const db = admin.firestore();

const getApprovedBloodRequests = async (req, res) => {
  try {
    const requestsSnapshot = await db
      .collection("bloodRequests")
      .where("acceptedBy", "!=", "null")
      .get();
    const requests = requestsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(requests);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching approved blood requests", error });
  }
};

module.exports = {
  getApprovedBloodRequests,
};
