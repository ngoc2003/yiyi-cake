import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../config/firebase.config";
import { ProductType } from "../types";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getProducListtByCategory = useCallback(async (name: string) => {
    try {
      setIsLoading(true);

      if (!name) return [];

      const categoryQuerySnapshot = await getDocs(
        query(collection(db, "categories"), where("name", "==", name))
      );

      if (categoryQuerySnapshot.empty) {
        console.error(`No category found with name: ${name}`);
        return [];
      }

      const categoryData = doc(
        db,
        "categories",
        categoryQuerySnapshot.docs[0].id
      );

      const productsQuerySnapshot = await getDocs(
        query(collection(db, "products"), where("category", "==", categoryData))
      );
      const newData = productsQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductType[];

      return newData;
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getProductById = useCallback(async (id: string) => {
    setIsLoading(true);
    try {
      const productSnapshot = await getDoc(doc(db, "products", id));
      if (productSnapshot.exists()) {
        const product = productSnapshot.data();
        return {
          id: productSnapshot.id,
          ...product,
        } as ProductType;
      } else {
        console.log(`No category found with ID: ${id}`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, getProducListtByCategory, getProductById };
};

export default useProducts;
