import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/client";
import { toast } from "sonner";
import { sendEmail } from "./api";

export const useSendEmail = () => {
  return useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      toast.success("Email sent successfully");
    },
    onError: () => {
      toast.error("Failed to send Email");
    },
  });
};
