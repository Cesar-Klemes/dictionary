export async function Meaning() {
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/house', {
        cache: 'no-store'
    })
    const data = await response.json()

    return (
        <div>
            <pre>{JSON.stringify(data[0].meanings[0].definitions, null, 2)}</pre>
        </div>
    )
}