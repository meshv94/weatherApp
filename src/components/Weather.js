import React, { useEffect, useState } from 'react';

export default function Weather() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Ahmedabad")

    // useEffect hook in react
    useEffect(() => {
        async function fetchAPI() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e47c5c0a1aa095d614c34eb9f4a3c35d`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchAPI();
    }, [search])

    return (
        <>
            <div className="box">

                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>

                {!city ? (
                    <p className="errorMsg">No Data Found</p>) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i> {search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                            <h3 className="tempmin_max"> Humidity : {city.humidity} </h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
                }


            </div>
        </>
    )
}


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e47c5c0a1aa095d614c34eb9f4a3c35d