const enum ButtonType {
    ACTION = "action",
    LINK = "link"
};

export const enum ButtonStyles {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY"
};

type CommonButtonProps = {
    variant?: ButtonStyles;
}

type ActionButtonProps = {
    onClick: () => void;
} & CommonButtonProps;

type LinkButtonProps = {
    path: string;
} & CommonButtonProps;

type BaseButtonProps = {
    buttonType: ButtonType
} & (ActionButtonProps | LinkButtonProps);

const buttonStyleMap = {
    [ButtonStyles.PRIMARY]: "bg-foreground text-background border-transparent",
    [ButtonStyles.SECONDARY]: "border-black/[.08] dark:border-white/[.145]",
};

const getCommonProps = (props: BaseButtonProps) => {
    const style = props.variant ?? ButtonStyles.PRIMARY;
    return {
        className: [
            "rounded-full border border-solid transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
            buttonStyleMap[style]
        ].join(" "),
    };
}

export const ButtonLink: (props: React.PropsWithChildren<LinkButtonProps>) => React.ReactNode = (props) => {
    const commonProps = getCommonProps({ ...props, buttonType: ButtonType.LINK });

    return <a
        {...commonProps}
        href={props.path}
        target="_blank"
        rel="noopener noreferrer"
    >{ props.children }</a>;
};

export const ButtonAction: (props: React.PropsWithChildren<ActionButtonProps>) => React.ReactNode = (props) => {
    const commonProps = getCommonProps({ ...props, buttonType: ButtonType.ACTION });

    return <span {...commonProps} onClick={props.onClick}>
        { props.children }
    </span>
};