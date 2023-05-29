import { v4 as uuidv4 } from "uuid"

const FullWidthText = ({ options }) => {
    const { links, headerTag, headerText } = options;
    return <section>
        <div className="container flex min-h-screen flex-col justify-center items-center">
            {headerTag === "h2" && <h2 className="text-center text-[64px] leading-tight font-light">
                {headerText.map(line => {
                    return <div key={uuidv4()}>
                        {line.lineText.map(word => {
                            if(word.stylingOptions.styledWord) {
                                return <span className={`${word.stylingOptions.fontFamily === "aloha" ? "font-aloha" : ""}`}> {word.word}</span>
                            } else {
                                return <> {word.word}</>
                            }
                        })}
                    </div>
                })}    
            </h2>}
            {headerTag === "h3" && <h3 className="text-center">{headerText}</h3>}
            {links && <div className="links">
                {links.map(link => {
                    return <a href={link.href}>
                        <div className="text-animate-wrapper flex flex-col">
                            <span className="opacity-0 width-placeholder">{link.label}</span>
                            <span className="line line--one">{link.label}</span>
                            <span className="line line--two">{link.label}</span>
                        </div>
                    </a>
                })}
            </div>}
        </div>
    </section>
}

export default FullWidthText