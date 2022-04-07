import React, { 
  useContext,
  Dispatch, 
  SetStateAction,
} from "react"

type Deleted = {
  deleted: boolean , 
  setDeleted: Dispatch<SetStateAction< boolean >>;
}

export const DeletedContext = React.createContext<Deleted>({
  deleted: false , 
  setDeleted: () => {}
});


export const useDeleted = () => {
  const ctx = useContext(DeletedContext)

  if (ctx === undefined)
   throw new Error
   ("useDeleted must be used within a DeletedProvider")

  return ctx
}

