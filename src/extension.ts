import { load } from '@tensorflow-models/toxicity';

load(0.9, []).then(model => {
    alert('loaded');
    console.log(model);
})