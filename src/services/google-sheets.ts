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
                    daysForBirth: parseInt(row[4]) || 0,
                    age: parseInt(row[5]) || 0,
                    gender: row[6],
                    address: row[7],
                    email: row[9],
                    phone: row[10] || 'No aplica',
                    belt: row[11], 
                    category: row[12],
                    birthdayMonth: row[14] === 'TRUE'
                }
            })
        })
        .catch(error => console.log(error));
}