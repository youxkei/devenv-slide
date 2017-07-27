import * as React from "react";
import {
    Theme,
    Deck,
    Slide,
    Heading,
} from "spectacle";
import { theme } from "spectacle-theme-solarized-light";

console.log(theme);

const thickenProgressBar = (theme: Theme) => ({
    ...theme,
    screen: {
        ...theme.screen,
        progress: {
            ...theme.screen.progress,
            bar: {
                ...theme.screen.progress.bar,
                container: {
                    ...theme.screen.progress.bar.container,
                    height: '16px',
                }
            },
        },
    },
});

export default () => (
    <div>
        <Deck theme={thickenProgressBar(theme)} transition={[]} transitionDuration={0} progress="bar">
            <Slide>
                <Heading fit>開発環境を晒す</Heading>
            </Slide>
            <Slide>hoge</Slide>
        </Deck>
        <a href="https://github.com/youxkei/devenv-slide">
            <img
                style={{ position: "absolute", top: 0, right: 0, border: 0 }}
                src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"
                alt="Fork me on GitHub"
                data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
            />
        </a>
    </div>
);
