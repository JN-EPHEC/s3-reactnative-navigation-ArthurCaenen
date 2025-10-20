import React from 'react';
import { Text } from 'react-native';

export function IconSymbol({ name, size = 16, color }: { name: string; size?: number; color?: string }) {
  // minimal stub: return a simple chevron for chevron.right, otherwise a small square
  if (name === 'chevron.right') return <Text style={{ fontSize: size, color }}>›</Text>;
  return <Text style={{ fontSize: size, color }}>■</Text>;
}
