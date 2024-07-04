
import firestore from '@react-native-firebase/firestore';
import { RunIfPossible } from '../RunIfPossible/RunIfPossible';
import { NullifyUndefinedValues } from '../NullifyUndefinedValues/NullifyUndefinedValues';

/**
 * Creates a new document in Firestore.
 *
 * @param {object} params - Parameters for creating a Firestore document.
 * @param {string} params.collectionName - The name of the collection to add the document to.
 * @param {string} params.documentId - The unique identifier for the new document.
 * @param {object} params.documentData - The data to be added to the new document.
 * @param {function} params.onSuccess - Callback function to execute on success.
 * @param {function} params.onError - Callback function to execute on error.
 * @returns {object|null} - The data of the newly added document if successful, or null on error.
 */
export async function CreateFirestoreDocument({
  collectionName,
  documentData,
  documentId,
  onSuccess,
  onError,
}) {
  try {


    if (!documentId) {

      return null;
    }

    if (!collectionName) {

      return null;
    }

    const documentDataNullified = NullifyUndefinedValues(documentData);

    const add = await firestore()
      .collection(collectionName)
      .doc(documentId)
      .set(documentDataNullified);

    RunIfPossible({ func: onSuccess, args: documentDataNullified });

    return documentDataNullified;
  } catch (error) {
    RunIfPossible({ func: onError, args: error });
    return null;
  }
}

/**
 * Retrieves a document from Firestore.
 *
 * @param {object} params - Parameters for retrieving a Firestore document.
 * @param {string} params.collectionName - The name of the collection containing the document.
 * @param {string} params.documentId - The unique identifier of the document to retrieve.
 * @param {function} params.onSuccess - Callback function to execute on success.
 * @param {function} params.onError - Callback function to execute on error.
 * @returns {object|null} - The data of the retrieved document if it exists, or null if not found or on error.
 */
export async function GetFirestoreDocument({
  collectionName,
  documentId,
  onSuccess,
  onError,
}) {
  try {
    if (!documentId) {

      return null;
    }

    if (!collectionName) {

      return null;
    }

    const documentSnapshot = await firestore()
      .collection(collectionName)
      .doc(documentId)
      .get();

    if (documentSnapshot.exists) {
      const documentData = documentSnapshot.data();
      RunIfPossible({ func: onSuccess, args: documentData });
      return documentData;
    } else {
      RunIfPossible({ func: onError, args: "The Firestore document doesn't exist: " + documentId });
      return null;
    }
  } catch (error) {
    RunIfPossible({ func: onError, args: error });
    return null;
  }
}

/**
 * Retrieves a collection from Firestore.
 *
 * @param {object} params - Parameters for retrieving a Firestore collection.
 * @param {string} params.collectionName - The name of the collection to retrieve.
 * @param {function} params.onSuccess - Callback function to execute on success.
 * @param {function} params.onError - Callback function to execute on error.
 */
export async function GetFirestoreCollection({
  collectionName,
  onSuccess,
  onError,
}) {
  try {
    if (!collectionName) {

      return null;
    }

    const querySnapshot = await firestore().collection(collectionName).get();
    const documents = [];

    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });

    RunIfPossible({ func: onSuccess, args: documents });
    return documents;
  } catch (error) {
    RunIfPossible({ func: onError, args: error });
    return null;
  }
}

/**
 * Updates a document in Firestore.
 *
 * @param {object} params - Parameters for updating a Firestore document.
 * @param {string} params.collectionName - The name of the collection containing the document to update.
 * @param {string} params.documentId - The unique identifier of the document to update.
 * @param {object} params.updateData - The data to update the document with.
 * @param {function} params.onSuccess - Callback function to execute on success.
 * @param {function} params.onError - Callback function to execute on error.
 * @returns {object|null} - The updated data of the document if successful, or null on error.
 */
export async function UpdateFirestoreDocument({
  collectionName,
  documentId,
  updateData,
  onSuccess,
  onError,
}) {
  try {
    if (!documentId) {
      return null;
    }

    if (!collectionName) {
      return null;
    }

    const updateDataNullified = NullifyUndefinedValues(updateData);

    const documentRef = firestore().collection(collectionName).doc(documentId);

    await documentRef.update(updateDataNullified);

    RunIfPossible({ func: onSuccess, args: updateDataNullified });

    return updateDataNullified;
  } catch (error) {
    RunIfPossible({ func: onError, args: error });
    return null;
  }
}

/**
 * Deletes a document from Firestore.
 *
 * @param {object} params - Parameters for deleting a Firestore document.
 * @param {string} params.collectionName - The name of the collection containing the document to delete.
 * @param {string} params.documentId - The unique identifier of the document to delete.
 * @param {function} params.onSuccess - Callback function to execute on success.
 * @param {function} params.onError - Callback function to execute on error.
 * @returns {boolean} - True if the document was successfully deleted, false on error.
 */
export async function DeleteFirestoreDocument({
  collectionName,
  documentId,
  onSuccess,
  onError,
}) {
  try {
    if (!documentId) {

      return false;
    }

    if (!collectionName) {

      return false;
    }

    const documentRef = firestore().collection(collectionName).doc(documentId);

    await documentRef.delete();

    RunIfPossible({ func: onSuccess });

    return true;
  } catch (error) {
    RunIfPossible({ func: onError, args: error });
    return false;
  }
}
