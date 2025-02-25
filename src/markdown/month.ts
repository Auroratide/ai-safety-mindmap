export const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const
export type Month = typeof Months[number]
