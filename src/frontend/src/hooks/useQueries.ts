import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission } from '../backend';

export function useGetContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetLocationInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['locationInfo'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getLocationInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
