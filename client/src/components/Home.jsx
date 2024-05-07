import { useNavigate } from "react-router-dom"
// import logo from "../assets/YouTube.svg"
// import Cards from "../components/Cards"
import Swal from "sweetalert2"
import Axios from "axios"
import { useEffect, useState } from "react"
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const Home = () => {
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const fetchData = async () => {
        try {
            const { data } = await Axios.get(`http://localhost:3000/activity `)
            // console.log(data)
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = () => {
        Swal.fire({
            title: "Do you want to logout?",
            text: "Yang Bener",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("access_token")
                navigate("/login")

                Swal.fire({
                    title: "Successfully!",
                    text: "See you!!",
                    icon: "success"
                });
            }
        });
    }


    useEffect(() => {
        fetchData()
    }, [])

    const handleCardClick = (id) => {
        navigate(`/${id}`);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetchData();
        }
    };
    const handleFavorite = () => {
        navigate(`/favorite`);
    };
    const handleProfile = () => {
        navigate(`/profile`);
    };


    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Judul Kegiatan
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama Proyek
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tanggal Mulai
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tanggal Berakhir
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Waktu Mulai
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Waktu Berakhir
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Durasi
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map(activity => (
                        <tr key={activity.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{activity.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{activity.startDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{activity.finishDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{activity.startTime}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{activity.finishTime}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{activity.duration}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => onEdit(activity.id)}>
                                    <img src="/edit-icon.png" alt="Edit" />
                                </button>
                                <button onClick={() => onDelete(activity.id)}>
                                    <img src="/delete-icon.png" alt="Delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}