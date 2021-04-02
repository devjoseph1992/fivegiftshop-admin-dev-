import db from '@/lib/firebase-admin';

export default async (_, res) => {
 const snapshot = await db.collection('brands').get();
 const brands = [];

 snapshot.forEach((doc) => {
  brands.push({ id: doc.id, ...doc.data() });
 });

 res.status(200).json({ brands });
};
