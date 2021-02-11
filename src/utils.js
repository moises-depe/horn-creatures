import creaturesArray from './data.js';

export const renderedKeywordOptions = Array.from(
    new Set(
        creaturesArray.map(creature => {
            Object.keys(creature)
            return creature.keyword
        })))

export const renderedHornsOptions = Array.from(
    new Set(
        creaturesArray.map(creature => {
            Object.keys(creature)
            return creature.horns
        })))