import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

export function MainProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="100841111499-1b1pkss2vhmkst94divjetaln4ij0vos.apps.googleusercontent.com">
        <MantineProvider>
          {children}
          <ReactQueryDevtools />
        </MantineProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
