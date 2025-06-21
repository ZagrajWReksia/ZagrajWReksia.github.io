import '../flags.css'

const Flag = ({code}: {code: string}) => {
    if (code.toLowerCase() === 'en') {
        return <span className="flag:GB"></span>
    }
    return <span className={`flag:${code.toUpperCase()}`}></span>
}

export default Flag