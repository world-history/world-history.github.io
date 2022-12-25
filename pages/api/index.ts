import { collection, doc, setDoc, getDocs, getDoc, DocumentData, QuerySnapshot, query, where, FieldPath, WhereFilterOp, DocumentSnapshot } from 'firebase/firestore/lite'
import { resolve } from 'path';
import { useState } from 'react';
import { database } from '../../firebaseConfig'

const dataCollection = collection(database, "data");

export const writeData = (id:string, newData:object) => {
  setDoc(doc(dataCollection, id), newData);
}

export const readDoc = (id:string) => {
    return getDoc(doc(dataCollection, id))
        .then(data => {
            return data.data();
        }).catch(error => {
            console.log(error);
        })
}

export const queryDocs = (path:string, operation:WhereFilterOp, value:any) => {
    const q = query(dataCollection, where(path, operation, value))

    return getDocs(q)
        .then(data => {
            return filterDocs(data);
        }).catch(error => {
            console.log(error);
        })
}

const filterDocs = (data:QuerySnapshot<DocumentData>) => {
    let docsArray = [];

    docsArray = data.docs.map(item => {
        return {
            id: item.id,
            ...item.data()
        }
    })

    return docsArray
}
