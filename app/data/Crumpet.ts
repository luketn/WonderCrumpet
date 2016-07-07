
type CrumpetType = "English" | "Scottish" | "Square" | "Pikelet";
export const CrumpetTypes = {
    English: "English" as CrumpetType,
    Scottish: "Scottish" as CrumpetType,
    Square: "Square" as CrumpetType,
    Pikelet: "Pikelet" as CrumpetType
};

export interface Crumpet {
    name:string;
    type:CrumpetType;
    imageUrl:string;
}