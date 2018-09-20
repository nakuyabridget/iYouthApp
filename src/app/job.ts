export class Job {
    id: number;
    title: string;
    body: string;
    location: string;
    availability = true;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
