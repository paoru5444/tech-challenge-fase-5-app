import { FormTask, ITask } from "@/domain/entities/task";
import { db } from "@/firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export class FirebaseTask {
  user = null;
  mainCollection = "users";
  subCollection = "tasks";

  private getRef(userId: string) {
    return collection(db, this.mainCollection, userId, this.subCollection);
  }

  async getTasks(userId: string): Promise<ITask[]> {
    const res = (await getDocs(query(this.getRef(userId)))).docs;

    const docs: ITask[] = res.map((doc) => ({
      id: doc.id,
      ...(doc.data() as FormTask),
    }));

    return docs;
  }

  async addTask(userId: string, task: ITask): Promise<ITask> {
    const docRef = doc(this.getRef(userId));
    await setDoc(docRef, task);
    return { ...task, id: docRef.id };
  }

  async deleteTask(userId: string, taskId: string) {
    return await deleteDoc(
      doc(db, this.mainCollection, userId, this.subCollection, taskId),
    );
  }

  async updateTask(
    userId: string,
    taskId: string,
    task: FormTask,
  ): Promise<ITask> {
    const docRef = doc(
      db,
      this.mainCollection,
      userId,
      this.subCollection,
      taskId,
    );

    await updateDoc(docRef, task);

    const snap = await getDoc(docRef);

    return { id: snap.id, ...(snap.data() as FormTask) };
  }
}
