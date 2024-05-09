import { format } from "date-fns"

export const formatDateNews = (dateString: string) => {
  const date = new Date(dateString)
  return format(date, "PPP", {})
}
