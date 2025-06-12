import db from '../index.js';

const getEmployeeList=(req,res)=>{
    const query = 'SELECT * FROM employee';

    db.query(query,(error,results) => {
        if (error) {
            return res.json({ error: 'Database query failed' ,error:error.message});
        }
        // Replace null or undefined values with empty strings
        const cleanedResults=results.map(row=>{
            const cleanedRow={};
            for (const key in row) {
                cleanedRow[key]=row[key] ?? "";
            }
            return cleanedRow;
        });
        res.json(cleanedResults);
    });
}




export {getEmployeeList};
