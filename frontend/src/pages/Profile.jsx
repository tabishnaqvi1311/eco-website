import { ResponsiveTimeRange } from "@nivo/calendar";

export default function Profile() {

    const data = [
        {
            "value": 60,
            "day": "2018-06-25"
        },
        {
            "value": 355,
            "day": "2018-05-05"
        },
        {
            "value": 220,
            "day": "2018-07-08"
        },
        {
            "value": 128,
            "day": "2018-04-10"
        },
        {
            "value": 177,
            "day": "2018-06-28"
        },
        {
            "value": 205,
            "day": "2018-06-23"
        },
        {
            "value": 369,
            "day": "2018-05-02"
        },
        {
            "value": 45,
            "day": "2018-07-04"
        },
        {
            "value": 317,
            "day": "2018-08-04"
        },
        {
            "value": 21,
            "day": "2018-07-21"
        },
        {
            "value": 148,
            "day": "2018-08-08"
        },
        {
            "value": 393,
            "day": "2018-04-23"
        },
        {
            "value": 145,
            "day": "2018-04-22"
        },
        {
            "value": 155,
            "day": "2018-04-01"
        },
        {
            "value": 211,
            "day": "2018-05-06"
        },
        {
            "value": 69,
            "day": "2018-06-08"
        },
        {
            "value": 219,
            "day": "2018-05-16"
        },
        {
            "value": 302,
            "day": "2018-04-04"
        },
        {
            "value": 23,
            "day": "2018-05-07"
        },
        {
            "value": 353,
            "day": "2018-05-01"
        },
        {
            "value": 337,
            "day": "2018-05-19"
        },
        {
            "value": 58,
            "day": "2018-07-16"
        },
        {
            "value": 102,
            "day": "2018-07-02"
        },
        {
            "value": 37,
            "day": "2018-08-10"
        },
        {
            "value": 133,
            "day": "2018-07-09"
        },
        {
            "value": 85,
            "day": "2018-08-05"
        },
        {
            "value": 1,
            "day": "2018-05-22"
        },
        {
            "value": 159,
            "day": "2018-07-31"
        },
        {
            "value": 364,
            "day": "2018-05-10"
        },
        {
            "value": 284,
            "day": "2018-05-15"
        },
        {
            "value": 140,
            "day": "2018-06-30"
        },
        {
            "value": 163,
            "day": "2018-07-24"
        },
        {
            "value": 40,
            "day": "2018-07-10"
        },
        {
            "value": 105,
            "day": "2018-08-06"
        },
        {
            "value": 293,
            "day": "2018-07-15"
        },
        {
            "value": 157,
            "day": "2018-05-20"
        },
        {
            "value": 125,
            "day": "2018-08-01"
        },
        {
            "value": 211,
            "day": "2018-07-14"
        },
        {
            "value": 1,
            "day": "2018-05-11"
        },
        {
            "value": 326,
            "day": "2018-06-22"
        },
        {
            "value": 367,
            "day": "2018-06-17"
        },
        {
            "value": 224,
            "day": "2018-04-14"
        },
        {
            "value": 62,
            "day": "2018-07-22"
        },
        {
            "value": 120,
            "day": "2018-04-06"
        },
        {
            "value": 215,
            "day": "2018-07-20"
        },
        {
            "value": 181,
            "day": "2018-04-12"
        },
        {
            "value": 107,
            "day": "2018-06-16"
        },
        {
            "value": 193,
            "day": "2018-05-14"
        },
        {
            "value": 354,
            "day": "2018-07-11"
        },
        {
            "value": 263,
            "day": "2018-04-13"
        },
        {
            "value": 17,
            "day": "2018-05-08"
        },
        {
            "value": 39,
            "day": "2018-05-04"
        },
        {
            "value": 305,
            "day": "2018-07-28"
        },
        {
            "value": 352,
            "day": "2018-04-19"
        },
        {
            "value": 114,
            "day": "2018-06-06"
        },
        {
            "value": 60,
            "day": "2018-04-24"
        },
        {
            "value": 287,
            "day": "2018-06-26"
        },
        {
            "value": 183,
            "day": "2018-06-02"
        },
        {
            "value": 334,
            "day": "2018-06-18"
        },
        {
            "value": 30,
            "day": "2018-06-24"
        },
        {
            "value": 82,
            "day": "2018-07-29"
        },
        {
            "value": 24,
            "day": "2018-05-30"
        },
        {
            "value": 321,
            "day": "2018-06-15"
        },
        {
            "value": 27,
            "day": "2018-06-01"
        },
        {
            "value": 328,
            "day": "2018-07-07"
        },
        {
            "value": 60,
            "day": "2018-05-09"
        },
        {
            "value": 223,
            "day": "2018-05-13"
        },
        {
            "value": 153,
            "day": "2018-04-02"
        },
        {
            "value": 283,
            "day": "2018-04-26"
        },
        {
            "value": 180,
            "day": "2018-06-05"
        },
        {
            "value": 43,
            "day": "2018-06-03"
        },
        {
            "value": 381,
            "day": "2018-06-12"
        },
        {
            "value": 11,
            "day": "2018-06-14"
        },
        {
            "value": 256,
            "day": "2018-05-03"
        },
        {
            "value": 99,
            "day": "2018-07-19"
        },
        {
            "value": 262,
            "day": "2018-04-18"
        },
        {
            "value": 20,
            "day": "2018-07-23"
        },
        {
            "value": 319,
            "day": "2018-06-11"
        },
        {
            "value": 137,
            "day": "2018-07-01"
        },
        {
            "value": 47,
            "day": "2018-04-30"
        },
        {
            "value": 113,
            "day": "2018-07-25"
        },
        {
            "value": 216,
            "day": "2018-07-18"
        }
    ]


    return (
        <main className="flex p-10">
            <div className="bg-gray-100 p-10 rounded-xl text-center flex flex-col justify-center items-center w-1/4">
                {/* <img src="" alt="" /> */}
                <h1 className="font-bold text-2xl">Profile Details</h1>
                <p>Username: {localStorage.getItem("email").split("@")[0]}</p>
                <p>Email: {localStorage.getItem("email")}</p>
            </div>
            <div className="h-96 w-3/4">
                <ResponsiveTimeRange
                    data={data}
                    from="2018-04-01"
                    to="2018-08-12"
                    emptyColor="#eeeeee"
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            justify: false,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left',
                            translateX: -60,
                            translateY: -60,
                            symbolSize: 20
                        }
                    ]} />
            </div>
        </main>
    )
}