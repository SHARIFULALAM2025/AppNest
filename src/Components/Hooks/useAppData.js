import axios from "axios";
import { useEffect, useState } from "react"

const useAppData = () => {
    const [allApp, setAllApp] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        axios("../Information.json")
            .then(data => { setAllApp(data.data) })
            .catch(err => { setError(err) })
        .finally(()=>{setLoading(false)})
    }, [])
    return { allApp, loading, error }
}
export default useAppData;