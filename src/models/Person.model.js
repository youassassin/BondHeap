import { Schema, model } from 'mongoose';

const PriorityEnum = Object.freeze({
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
});

const QualityEnum = Object.freeze({
    POOR: 'Poor',
    NONE: 'None',
    AVERAGE: 'Average',
    GOOD: 'Good',
    EXCELLENT: 'Excellent',
});

const PersonSchema = new Schema({
    fullName: {
        first: {
            type: String, // First name of the person
            required: true,
        },
        middle: {
            type: String, // Middle name of the person
            required: false,
            default: '',
        },
        last: {
            type: String, // Last name of the person
            required: true,
        },
    },
    timeSpent: {
        type: Number, // Amount of time spent with (in hours, for example)
        required: false,
        default: 0,
    },
    lastConnected: {
        type: Date, // Most recent time connected to
        required: false,
        default: Date.now,
    },
    priority: {
        type: String,
        enum: Object.values(PriorityEnum), // Priority as an enum
        required: false,
        default: PriorityEnum.NONE,
    },
    relationshipQuality: {
        type: String,
        enum: Object.values(QualityEnum), // Quality of relationship as an enum
        required: false,
        default: QualityEnum.NONE,
    },
    notes: {
        type: String, // Notes about the person
        required: false,
        default: '',
    },
}, {
    methods: {
        getFullName() {
            return `${this.fullName.first} ${this.fullName.middle} ${this.fullName.last}`.trim();
        },
    },
});

Object.assign(PersonSchema.statics, { PriorityEnum, QualityEnum });

const Person = model('Person', PersonSchema);

export default Person;