export type courseType = {
    id: number;
    title: string;
    description: string;
    sections: {
        lessons: { title: string; id: number }[];
        id: number | null;
        title: string | null;
    }[];
}