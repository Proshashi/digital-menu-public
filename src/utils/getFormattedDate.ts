import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

export default (date: any) => {
  return dayjs.unix(date).format("LT");
};
