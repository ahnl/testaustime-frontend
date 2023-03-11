import axios from "../axios";
import { useMutation, useQueryClient } from "react-query";
import { useAuthentication } from "./useAuthentication";
import { User } from "./useAuthentication";
import { useRouter } from "next/router";

export const useAccount = () => {
  const { logOut, username } = useAuthentication();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync: changeAccountVisibility } =
    useMutation("changeUserVisibility", (visibility: boolean) => axios.post("/account/settings", {
      public_profile: visibility
    }), {
      onSuccess: (_, newVisibility) => {
        queryClient.setQueryData("fetchUser", (old: User | undefined) => {
          if (!old) throw new Error("User not found");
          return {
            ...old,
            isPublic: newVisibility
          };
        });
      }
    });

  const { mutateAsync: deleteAccount } = useMutation("deleteAccount",
    (password: string) => axios.delete("/users/@me/delete", {
      data: {
        username,
        password
      }
    }),
    {
      onSuccess: () => {
        queryClient.removeQueries("fetchUser");
        logOut();
        router.push("/").catch(console.error);
      }
    });

  return {
    changeAccountVisibility: (visibility: boolean) => changeAccountVisibility(visibility),
    deleteAccount: (password: string) => deleteAccount(password)
  };
};
