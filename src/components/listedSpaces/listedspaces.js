import React, { useState, useEffect } from "react";
import Avatar from "../layout/Avatar";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading";
import { LoadSpaces } from "./LoadSpaces";
import { db } from "../../store";
let users = [];

const ListedSpaces = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();
  const { uid } = useSelector((state) => state.firebase.auth);
  const users = useSelector((state) => state.firestore.ordered.places);

  useFirestoreConnect({
    collection: "places",
  });
  if (!users) {
    return <Loading />;
  }

  // useEffect(() => {

  // }, []);

  // useFirestoreConnect([
  //   { collection: "users", orderBy: ["createdAt", "desc"] },
  // ]);

  // const users = firebase.firestore().collection("users");

  // useEffect(() => {
  //   getUsers();
  // }, []);
  // console.log(users);

  // const getUsers = async () => {
  //   try {
  //     const arr = [
  //       "Mb6V4kEnp0aDLoyrdhQ85uzReUv1",
  //       "eXhlysyYruQDBt1NhNFNcVUDa2H2",
  //     ];
  //     // LoadSpaces(arr)
  //     for (let i = 0; i < arr.length; i++) {
  //       await db
  //         .collection("users")
  //         .doc(arr[i])
  //         .collection("places")
  //         .get()
  //         .then((snap) => {
  //           snap.forEach((doc) => {
  //             console.log(doc.data());
  //             users.push(doc.data());

  //             console.log(users);
  //           });
  //         });
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }

  //   return users;
  // };

  // const getUsers = async () => {
  //   try {
  //     const collection = {};
  //     const docRef = firestore.collection("users");
  //     const result = await docRef.get();
  //     if (result.exists) {
  //       result.forEach((doc) => {
  //         collection[doc.id] = doc.data();
  //       });
  //       console.log(collection);

  //       return collection;
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }
  // };
  // const arr = ["eXhlysyYruQDBt1NhNFNcVUDa2H2", "Mb6V4kEnp0aDLoyrdhQ85uzReUv1"];
  // for (let i = 0; i < arr.length; i++) {
  //   <LoadSpaces id={arr[i]} />;
  // }
  // useFirestoreConnect([
  //   {
  //     collection: `users/${arr[i]}/places`,
  //     storeAs: "users",
  //   },
  // ]);

  // const users = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[id]
  // );

  // const users = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[id]
  // );
  // const users = useSelector((state) => state.firestore.ordered.users);
  // if (!users) {
  //   return <Loading />;
  // }

  const deleteUser = async (id) => {
    try {
      await firestore.collection("users").doc(id).delete();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={user.id}>
              <div className="card shadow text-center py-4">
                <Avatar url={`https://i.pravatar.cc/150?img=${index}`} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{user.name}</h5>
                  <h5 className="card-title mb-0">{user.id}</h5>

                  <p className="text-muted small">{user.email}rtegrfed</p>
                  <Link
                    to={`/user/${user.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <button
                    className="btn btn-edit"
                    onClick={() => deleteUser(user.id)}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedSpaces;