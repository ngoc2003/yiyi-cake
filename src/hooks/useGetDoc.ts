import { collection, getDocs, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../config/firebase.config";

interface GetFireBaseDocProps {
  name: string;
  condition?: any;
}
export const useGetDoc = ({ name, condition }: GetFireBaseDocProps) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    getDocs(query(collection(db, name), condition))
      .then((querySnapshot) => {
        setData(querySnapshot.docs[0].data());
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name, condition]);

  useEffect(() => {
    if (name) {
      getData();
    }
  }, []);

  return { data, isLoading };
};
