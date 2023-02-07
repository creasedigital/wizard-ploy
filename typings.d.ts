interface IWizardsRootObject {
    elixirs: IWizardsElixir[];
    id: string;
    firstName?: string;
    lastName: string;
}

interface IWizardsElixir {
    id: string;
    name: string;
}

interface ISpellsRootObject {
    id: string;
    name: string;
    incantation?: string;
    effect: string;
    canBeVerbal?: boolean;
    type: string;
    light: string;
    creator?: string;
}

interface IElixirRootObject {
    id: string;
    name: string;
    effect?: string;
    sideEffects?: string;
    characteristics?: string;
    time?: string;
    difficulty: string;
    ingredients: IElixirIngredient[];
    inventors: (IElixirInventor | IElixirInventors2)[];
    manufacturer?: string;
}

interface IElixirInventors2 {
    id: string;
    firstName?: any;
    lastName: string;
}

interface IElixirInventor {
    id: string;
    firstName: string;
    lastName: string;
}

interface IElixirIngredient {
    id: string;
    name: string;
}

export  {IWizardsRootObject, 
    IWizardsElixir,
    ISpellsRootObject,
    IElixirRootObject,
    IElixirInventors2,
    IElixirInventor,
    IElixirIngredient,
}

