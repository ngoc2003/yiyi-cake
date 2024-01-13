import { collection, getDocs, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../config/firebase.config";

interface GetFireBaseDataProps {
  name: string;
  condition?: any;
}
export const useGetFirebaseData = ({
  name,
  condition,
}: GetFireBaseDataProps) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    const stringFilter = !!condition
      ? getDocs(query(collection(db, name), condition))
      : getDocs(collection(db, name));

    stringFilter
      .then(async (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(newData);
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  useEffect(() => {
    if (name) {
      getData();
    }
  }, []);

  return { data, refetch: getData, isLoading };
};
