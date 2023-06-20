main();
async function main() {
    const single: Promise<string> = new Promise(res => res('l4d1345'));

    const triple: Promise<Promise<Promise<string>>> =
        new Promise<Promise<Promise<string>>>(res =>
            res(
                new Promise<Promise<string>>(res =>
                    res(
                        new Promise<string>(res => {
                            res('Vin')
                        })
                    )
                )
            )
        );

    const stringResult = await single;
    console.log(stringResult); // l4d1345

    const tripleResult = await triple;
    console.log(tripleResult); // Vin
}

async function example<T>(input: T) {
    const output: Awaited<T> = await input;
    return output;
}

async function fetchUserName() {
    const single: Promise<string> = new Promise(res => res('fetchUserName'));

    const str: string = await example(single);
    
    console.log(str);
}

fetchUserName();