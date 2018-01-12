import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SpanToolTip } from "./../StyleComponents/Config";
import { Icon, Label } from "semantic-ui-react";

const Entry = props => (
  <div style={{ marginTop: 10 }}>
    <CopyToClipboard text={props.text} onCopy={() => props.onCopy()}>
      <Label as="a" color="black" image>
        <img alt={props.title} src={props.img} />
        Group Entrys
        <Label.Detail>
          {props.title} <Icon name="copy" style={{ marginLeft: 10 }} />
        </Label.Detail>
      </Label>
    </CopyToClipboard>
    {props.copied ? <SpanToolTip>Copied!</SpanToolTip> : null}
    <pre className="shadow">
      <code className="javascript" ref={ref => props.reference(ref)}>
        {props.text}
      </code>
    </pre>
    <CopyToClipboard text={"polo"} onCopy={() => console.log("copy")}>
      <Label as="a" color="grey">
        CURL <Icon name="copy" style={{ marginLeft: 7, marginRight: 0 }} />
      </Label>
    </CopyToClipboard>
    <CopyToClipboard text={"polo"} onCopy={() => console.log("copy")}>
      <Label as="a" color="grey">
        AXIOS JS <Icon name="copy" style={{ marginLeft: 7, marginRight: 0 }} />
      </Label>
    </CopyToClipboard>
  </div>
);

export default Entry;
