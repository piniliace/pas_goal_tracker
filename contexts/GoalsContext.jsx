import { addDoc, collection } from "firebase/firestore"
import { createContext, useState } from "react"
import { db } from "../firebaseConfig"

export const GoalsContext = createContext()

export function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([])

  async function fetchGoals() {
  }
 
  async function createGoal(goalData) {
    console.log(goalData)
    await addDoc(collection(db, 'lessons'), goalData)
  }

  async function deleteGoal() {
  }

  async function updateGoal() {
  }

  return (
    <GoalsContext.Provider
      value={{ goals, fetchGoals, createGoal, deleteGoal, updateGoal }}
    >
      {children}
    </GoalsContext.Provider>
  )
}
