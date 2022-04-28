import { REGEX_REMOVE_HTML_TAG } from "./regex";

export const removeHTMLTag = (htmlString: string) => htmlString.replace(REGEX_REMOVE_HTML_TAG, "");