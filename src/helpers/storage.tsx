const key = 'app_storage';

const storageController = () => {
    let data = JSON.parse(window.localStorage.getItem(key) || '{}')
    const save = () => window.localStorage.setItem(key, JSON.stringify(data))
    return {
        get: (key: string) => {
            return data[key]
        },
        set: (key: string, value: unknown) => {
            data[key] = value
            save()
        },
        delete: (key: string) => {
            delete data[key]
            save()
        },
        clear: () => {
            data = {}
            save()
        },
    }
}

export default storageController()