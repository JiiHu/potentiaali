import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const schedule = [
  {
    id: 1,
    companyName: "",
    location: "Kumpulan kampus",
    title: {
      fi: 'Kumpulan Potentiaali 2024',
      "en-US": 'Kumpulan Potentiaali 2024',
    },
    description: "",
    fullDescription: {
      fi: "Tapahtuman tarkempi aikataulu ja yksityiskohdat tarkentuvat syksyn 2024 aikana.",
      "en-US": "The schedule and details of the event will be published during the fall of 2024.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 11, 7, 11, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 11, 7, 23, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },
];

export default schedule;
