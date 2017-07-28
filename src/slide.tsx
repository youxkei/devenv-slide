import * as React from "react";
import {
    Theme,
    Deck,
    Slide,
    Heading as SpectacleHeading,
    Image,
    Link as SpectacleLink,
    List,
    ListItem,
} from "spectacle";
import SpectacleImageSlide from "spectacle-image-slide";
import GithubForkRibbon from "react-github-fork-ribbon";
import { theme } from "spectacle-theme-solarized-light";

import whoareyou from "../img/whoareyou.jpg";
import youxkei from "../img/youxkei.png";
import kanjuden from "../img/kanjuden.png";
import question from "../img/question.jpg";
import work from "../img/work.jpg";
import ubuntu from "../img/ubuntu.png";
import dudrack from "../img/dudrack.png";
import keymap from "../img/keymap.png";
import i3wm from "../img/i3wm.png";
import i3usage from "../img/i3usage.jpg";
import chrome from "../img/chrome.png";
import horobiyo from "../img/horobiyo.png";
import rambox from "../img/rambox.png";
import gnometerminal from "../img/gnometerminal.png";
import zsh from "../img/zsh.png";
import zshPronunciation from "../img/zsh-pronunciation.png";
import enhancd from "../img/enhancd.png";
import enhancdUsage from "../img/enhancd-usage.png";
import vim from "../img/vim.svg";
import neovim from "../img/neovim.svg";
import neovimUsage from "../img/neovim-usage.png";
import neovimQt from "../img/neovim-qt.png";
import ezoe from "../img/ezoe.png";
import dlang from "../img/dlang.png";
import dman from "../img/dman.png";
import nodejs from "../img/nodejs.svg";
import react from "../img/react.png";
import sinatra from "../img/sinatra.png";
import spectacle from "../img/spectacle.png";

const Footer = () => (
    <div style={{
        position: "absolute",
        width: "100%",
        bottom: "20px",
        textAlign: "center",
    }}>
        <a
            style={{
                color: theme.screen.colors.tertiary,
                fontSize: 48,
                fontFamily: "monospace",
                textDecoration: "initial",
            }}
            href="//git.io/v7ZUX"
        >
            git.io/v7ZUX
        </a>
    </div>
);

const Link = (props: { href: string }) => (<SpectacleLink textColor="tertiary" {...props} />);

const ImageSlide = (props: { image: string, title?: string }) => (
    <SpectacleImageSlide
        {...props}
        titleProps={{
            textColor: "tertiary",
            caps: false,
        }}
    />
);

const Heading = (props: { fit?: boolean, size?: number, children?: any }) => (
    <SpectacleHeading {...props} textColor="tertiary" />
);

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

const contents = [
    { name: "目的", bodies: [
        <Slide>
            <Heading size={3}>より良い開発環境を</Heading>
            <Heading size={3}>目指した議論のたたき台</Heading>
        </Slide>,
    ] },
    { name: "OS", bodies: [
        <Slide>
            <ImageSlide image={ubuntu} title="Ubuntu" />
        </Slide>,
        <Slide>
            <Heading size={3}>Ubuntuの良い所</Heading>
            <List>
                <ListItem>カスタマイズしやすさ</ListItem>
                <ListItem>パッケージマネージャ</ListItem>
                <ListItem>コミュニティの大きさ</ListItem>
                <ListItem>リリース年月に基づくバージョン</ListItem>
                <ListItem>6ヶ月に1回のリリース</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Ubuntuの悪い所</Heading>
            <List>
                <ListItem>平和なアップグレードはめったにない</ListItem>
                <ListItem>（新しい）デバイスのドライバがない</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Windows</ListItem>
                <ListItem>macOS</ListItem>
            </List>
        </Slide>
    ] },
    { name: "キー配列変更", bodies: [
        <Slide>
            <ImageSlide image={dudrack} title="dudrack" />
        </Slide>,
        <Slide>
            <Heading size={3}>dudrackの良い所</Heading>
            <List>
                <ListItem>カスタマイズしやすさ</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>dudrackの悪い所</Heading>
            <List>
                <ListItem>謎のバグによって時々落ちる</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>のどか（Windows）</ListItem>
                <ListItem>Karabiner（macOS）</ListItem>
                <ListItem>xmodmap（Linux）</ListItem>
            </List>
        </Slide>,
        <Slide>
            <ImageSlide image={keymap} title="キー配列" />
        </Slide>
    ] },
    { name: "ウィンドウマネージャ", bodies: [
        <Slide>
            <ImageSlide image={i3wm} title="i3" />
        </Slide>,
        <Slide>
            <ImageSlide image={i3usage} title="タイル型ウィンドウマネージャ" />
        </Slide>,
        <Slide>
            <Heading size={3}>i3の良い所</Heading>
            <List>
                <ListItem>それなりのカスタマイズしやすさ</ListItem>
                <ListItem>キーボードによる操作</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>i3の悪い所</Heading>
            <List>
                <ListItem>微妙に痒いところに手が届かない</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他のタイル型ウィンドウマネージャの選択肢</Heading>
            <List>
                <ListItem>awesome</ListItem>
                <ListItem>xmonad</ListItem>
            </List>
        </Slide>,
    ] },
    { name: "ブラウザ", bodies: [
        <Slide>
            <ImageSlide image={chrome} title="Google Chrome" />
        </Slide>,
        <Slide>
            <Heading size={3}>Chromeの良い所</Heading>
            <List>
                <ListItem>Flashが動く</ListItem>
                <ListItem>Flash滅びろ！！！</ListItem>
            </List>
            <Image src={horobiyo} width="40%" />
        </Slide>,
        <Slide>
            <Heading size={3}>Chromeの悪い所</Heading>
            <List>
                <ListItem>メモリ</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Firefox</ListItem>
                <ListItem>Chromium</ListItem>
            </List>
        </Slide>,
    ] },
    { name: "Slackクライアント", bodies: [
        <Slide>
            <ImageSlide image={rambox} title="Rambox" />
        </Slide>,
        <Slide>
            <Heading size={3}>Ramboxの良い所</Heading>
            <List>
                <ListItem>Ubuntuでちゃんと動作</ListItem>
                <ListItem>Slack以外のサービス</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Ramboxの悪い所</Heading>
            <List>
                <ListItem>いつの間にかTweetDeckが開いてる</ListItem>
                <ListItem>Ctrl-Tが使えない</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Slack公式クライアント</ListItem>
                <ListItem>ChromeでWeb版を開く</ListItem>
                <ListItem>Franz</ListItem>
            </List>
        </Slide>,
    ] },
    { name: "ターミナルエミュレータ", bodies: [
        <Slide>
            <ImageSlide image={gnometerminal} title="Gnome Terminal" />
        </Slide>,
        <Slide>
            <Heading size={3}>Gnome Terminalの良い所</Heading>
            <List>
                <ListItem>標準</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Gnome Terminalの悪い所</Heading>
            <List>
                <ListItem>微妙に重い</ListItem>
                <ListItem>全角文字が全角で表示されない</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>urxvt</ListItem>
                <ListItem>xterm</ListItem>
            </List>
        </Slide>,
    ] },
    { name: "シェル", bodies: [
        <Slide>
            <ImageSlide image={zsh} title="Zsh" />
        </Slide>,
        <Slide>
            <Heading size={3}>Zshの良い所</Heading>
            <List>
                <ListItem>補完が強い</ListItem>
                <ListItem>プラグインマネージャがある</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Zshの悪い所</Heading>
            <List>
                <ListItem>起動が遅い</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading>ところで・・・</Heading>
        </Slide>,
        <Slide>
            <Heading>Zshの発音・・・？</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={zshPronunciation} title="Zshの発音" />
        </Slide>,
        <Slide>
            <Heading size={2}>READMEに発音記号を書いてください！</Heading>
            <Heading size={2}>何でもしますから！！</Heading>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Bash</ListItem>
                <ListItem>dash</ListItem>
                <ListItem>tcsh</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading>さらに・・・</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={enhancd} title="enhancd" />
        </Slide>,
        <Slide>
            <ImageSlide image={enhancdUsage} title="履歴からfuzzy findしてcd" />
        </Slide>,
    ] },
    { name: "テキストエディタ", bodies: [
        <Slide>
            <ImageSlide image={vim} title="Vim" />
        </Slide>,
        <Slide>
            <Heading>・・・</Heading>
        </Slide>,
        <Slide>
            <Heading>・・・ではなく</Heading>
        </Slide>,
        <Slide>
            <ImageSlide
                image={neovim}
                title="Neovim"
            />
        </Slide>,
        <Slide>
            <ImageSlide image={neovimUsage} title="Neovim" />
        </Slide>,
        <Slide>
            <ImageSlide image={neovimQt} title="neovim-qt" />
        </Slide>,
        <Slide>
            <Heading size={3}>Neovimの良い所</Heading>
            <List>
                <ListItem>思考の速度で編集</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Neovimの悪い所</Heading>
            <List>
                <ListItem>中毒性が高すぎる</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Emacs・・・？</ListItem>
                <ListItem>Sublime Text</ListItem>
                <ListItem>Atom</ListItem>
                <ListItem>Visual Studio Code</ListItem>
            </List>
        </Slide>,
        <Slide>
            <ImageSlide image={ezoe} />
        </Slide>,
    ] },
    { name: "プログラミング言語", bodies: [
        <Slide>
            <Heading>可能な限り・・・</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={dlang} title="D言語" />
        </Slide>,
        <Slide>
            <Heading size={3}>D言語の良い所</Heading>
            <List>
                <ListItem>強力なテンプレート</ListItem>
                <ListItem>コンパイル時間数実行</ListItem>
                <ListItem>コンパイル時ミックスイン</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>D言語の悪い所</Heading>
            <List>
                <ListItem>コミュニティが小さい</ListItem>
                <ListItem>サードパーティのライブラリが弱い</ListItem>
                <ListItem>パターンマッチがない</ListItem>
            </List>
        </Slide>,
        <Slide>
            <ImageSlide image={dman} title="D言語くん" />
        </Slide>,
        <Slide>
            <Heading>ライブラリ的に難しそうなら・・・</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={nodejs} title="JavaScript" />
        </Slide>,
        <Slide>
            <Heading size={3}>JavaScriptの良い所</Heading>
            <List>
                <ListItem>型が付く（by Flow）</ListItem>
                <ListItem>Babel</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>JavaScriptの悪い所</Heading>
            <List>
                <ListItem>this</ListItem>
                <ListItem>ネストしたパターンマッチがない</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Haskell</ListItem>
                <ListItem>Ruby</ListItem>
                <ListItem>Python</ListItem>
            </List>
        </Slide>,
    ] },
    { name: "ライブラリ", bodies: [
        <Slide>
            <Heading>GUIなアプリをさくっと作る</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={react} title="React" />
        </Slide>,
        <Slide>
            <Heading size={3}>Reactの良い所</Heading>
            <List>
                <ListItem>コンポーネント単位</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Reactの悪い所</Heading>
            <List>
                <ListItem>コード記述量</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>GTKやQt</ListItem>
                <ListItem>Vue.js</ListItem>
                <ListItem>Angular</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading>REST APIサーバをさくっと作る</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={sinatra} title="Sinatra" />
        </Slide>,
        <Slide>
            <Heading>だったんですが・・・</Heading>
        </Slide>,
        <Slide>
            <Heading>Rubyがつらい！</Heading>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>Express</ListItem>
                <ListItem>vibe.d</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading>スライドをさくっと作る</Heading>
        </Slide>,
        <Slide>
            <ImageSlide image={spectacle} title="Spectacle" />
        </Slide>,
        <Slide>
            <Heading>ちなみに・・・</Heading>
        </Slide>,
        <Slide>
            <Heading>このスライドもSpectacle製</Heading>
        </Slide>,
        <Slide>
            <Heading size={3}>Spectacleの良い所</Heading>
            <List>
                <ListItem>React</ListItem>
                <ListItem>JavaScriptの柔軟性</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>Spectacleの悪い所</Heading>
            <List>
                <ListItem>機能不足</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>他の選択肢</Heading>
            <List>
                <ListItem>reveal.js</ListItem>
                <ListItem>LibreOffice Impress</ListItem>
                <ListItem>Google スライド</ListItem>
            </List>
        </Slide>,
    ] },
    { name: "最後に", bodies: [
        <Slide>
            <Heading>お役立ちリンクを置いておきます</Heading>
            <Heading size={4}><Link href="https://github.com/youxkei/dotfiles">https://github.com/youxkei/dotfiles</Link></Heading>
        </Slide>,
    ] },
];

export default () => (
    <div>
        <Deck theme={thickenProgressBar(theme)} transition={[]} transitionDuration={0} progress="bar">
            <Slide>
                <Heading fit>開発環境を晒す</Heading>
            </Slide>
            <Slide>
                <ImageSlide image={whoareyou} />
            </Slide>
            <Slide>
                <Image src={youxkei} width="36%" />
                <Heading>MIMA, Hisayuki</Heading>
                <List>
                    <ListItem>Twitter: <Link href="https://twitter.com/youxkei">@youxkei</Link></ListItem>
                    <ListItem>Github: <Link href="https://github.com/youxkei">youxkei</Link></ListItem>
                </List>
            </Slide>
            <Slide>
                <Heading>最近やってること</Heading>
                <List>
                    <ListItem>プログラミング言語の意味論の研究</ListItem>
                    <ListItem>Reloaded</ListItem>
                    <ListItem>TypeScript</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>東方紺珠伝RTA <Link href="http://www.speedrun.com/run/emk6o4xz">36分36秒</Link></ListItem>
                </List>
                <Image src={kanjuden} width="40%" />
            </Slide>
            <Slide>
                <Heading>注意</Heading>
            </Slide>
            <Slide>
                <ImageSlide image={question} title="任意のタイミングで質問や議論OK" />
            </Slide>
            <Slide>
                <ImageSlide image={work} title="任意のタイミングで退席OK" />
            </Slide>
            <Slide>
                <Heading>1. 目次</Heading>
                <List {...{ ordered: true }}>
                    <ListItem>目次</ListItem>
                    { contents.map(({ name }, i) => (<ListItem key={i}>{name}</ListItem>)) }
                </List>
            </Slide>
            {
                contents.map(({ name, bodies }, i) => [
                    <Slide>
                        <Heading>{i + 2}. {name}</Heading>
                    </Slide>,
                    bodies,
                ])
            }
        </Deck>
        <GithubForkRibbon href="https://github.com/youxkei/devenv-slide/" color="orange">Fork me on Github</GithubForkRibbon>
        <Footer />
    </div>
);
