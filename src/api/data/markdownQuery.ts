import { useQuery } from "react-query";

interface QueryProps {
    queryUrl: string;
}

export const QueryMarkdownText = ({ queryUrl }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery('TextQuery', () => {
        return fetch(queryUrl + ".md")
            .then(res => res.text())
            .then((data) => data.replaceAll('<br/>', '\n'))
    })

    return { isLoading, isError, data, error, refetch };
}