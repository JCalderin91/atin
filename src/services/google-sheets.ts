import { Athlete } from "@/types/athlete";

const config = {
    apiKey: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY,
    spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID,
    range: import.meta.env.VITE_GOOGLE_SHEETS_RANGE
}


export const getAthletes = async (): Promise<Athlete[]> => {
    return await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${config.range}?key=${config.apiKey}`)
        .then(response => response.json())
        .then((res) => {
            return res.values.filter((row:string[]) => row[0].length).map((row: string[]) => {
                return {
                    firstName: row[0],
                    lastName: row[1],
                    id: parseInt(row[2]) || 0,
                    bornDate: row[3],
                    age: parseInt(row[4]) || 0,
                    gender: row[5],
                    address: row[6],
                    email: row[8],
                    phone: row[9] || 'No aplica',
                    belt: row[10], 
                    category: row[11]
                }
            })
        })
        .catch(error => console.log(error));
}